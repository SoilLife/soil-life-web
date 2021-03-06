// taken from https://gist.github.com/ZachHaber/feb0432fe395a303a4f10671877e5e70

import React, { forwardRef, HTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { DataSet } from 'vis-data';
import { Network, Edge, Node, Options, NetworkEvents, IdType } from 'vis-network';
import { differenceWith, intersectionWith, isEqual, defaultsDeep, cloneDeep } from 'lodash';

export type { Network, Edge, Node, Options, NetworkEvents, IdType };

export type GraphEvents = Partial<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<NetworkEvents, (params?: any) => void>
>;

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

export interface NetworkGraphProps {
  graph: GraphData;
  options?: Options;
  events?: GraphEvents;
  style?: React.CSSProperties;
  className?: string;
}
/**
 * Keeps the value the same permanently.
 * Useful over refs especially in instances where the function creation variant is used
 */
function useSealedState<T>(value: T | (() => T)) {
  const [state] = useState(value);
  return state;
}

/**
 * https://github.com/crubier/react-graph-vis/commit/68bf2e27b2046d6c0bb8b334c2cf974d23443264
 */
const diff = <T extends { id?: IdType }>(current: T[], next: T[], field: keyof T = 'id') => {
  const nextIds = new Set(next.map((item) => item[field]));
  const removed = current.filter((item) => !nextIds.has(item[field]));

  const unchanged = intersectionWith(next, current, isEqual);

  const updated = differenceWith(
    intersectionWith(next, current, (a, b) => a[field] === b[field]),
    unchanged,
    isEqual
  );

  const added = differenceWith(differenceWith(next, current, isEqual), updated, isEqual);

  return {
    removed,
    unchanged,
    updated,
    added,
  };
};

const defaultOptions = {
  physics: {
    stabilization: false,
  },
  autoResize: false,
  edges: {
    smooth: false,
    color: '#000000',
    width: 0.5,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.5,
      },
    },
  },
};
/**
 * Conversion of https://github.com/crubier/react-graph-vis/blob/master/src/index.js to a function component
 */
export const VisGraph = forwardRef<Network | undefined, NetworkGraphProps & HTMLAttributes<HTMLDivElement>>(
  ({ graph, events, options: propOptions, ...props }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const edges = useSealedState(() => new DataSet<Edge>(graph.edges));
    const nodes = useSealedState(() => new DataSet<Node>(graph.nodes));
    const initialOptions = useSealedState(propOptions);

    const prevNodes = useRef(graph.nodes);
    const prevEdges = useRef(graph.edges);
    useEffect(() => {
      if (isEqual(graph.nodes, prevNodes.current)) {
        return; // No change!
      }
      const { added, removed, updated } = diff(prevNodes.current, graph.nodes);

      nodes.remove(removed);
      nodes.add(added);
      nodes.update(updated);
      prevNodes.current = graph.nodes;
    }, [graph.nodes, nodes]);

    useEffect(() => {
      if (isEqual(graph.edges, prevEdges.current)) {
        return; // No change!
      }
      const { added, removed, updated } = diff(prevEdges.current, graph.edges);

      edges.remove(removed);
      edges.add(added);
      edges.update(updated);
      prevEdges.current = graph.edges;
    }, [graph.edges, edges]);
    const [network, setNetwork] = useState<Network>();

    useImperativeHandle(ref, () => network, [network]);

    useEffect(() => {
      if (!network || !events) {
        return () => {};
      }
      // Add user provied events to network
      for (const [eventName, callback] of Object.entries(events)) {
        if (callback) {
          network.on(eventName as NetworkEvents, callback);
        }
      }
      return () => {
        for (const [eventName, callback] of Object.entries(events)) {
          if (callback) {
            network.off(eventName as NetworkEvents, callback);
          }
        }
      };
    }, [events, network]);

    useEffect(() => {
      if (!network || !propOptions) {
        return;
      }
      try {
        network.setOptions(propOptions);
      } catch (error) {
        // Throws when it hot reloads... Yay
        if (process.env.NODE_ENV !== 'development') {
          // Still throw it in prod where there's no hot reload
          throw error;
        }
      }
    }, [network, propOptions]);

    useEffect(() => {
      // Creating the network has to be done in a useEffect because it needs access to a ref

      // merge user provied options with our default ones
      // defaultsDeep mutates the host object
      const mergedOptions = defaultsDeep(cloneDeep(initialOptions), defaultOptions);
      const newNetwork = new Network(container.current as HTMLElement, { edges, nodes }, mergedOptions);
      setNetwork(newNetwork);
      return () => {
        // Cleanup the network on component unmount
        newNetwork.destroy();
      };
    }, [edges, initialOptions, nodes]);

    return (
      <div
        className='viz-graph relative top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full max-w-[90%] max-h-[90%]'
        ref={container}
        {...props}
      />
    );
  }
);
