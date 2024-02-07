import React from "react";
import { Node, Edge } from "helpers/use-web-of-soil";

type NodeSelections = (Node & { active: boolean })[];

export const visGraphOptions = {
  autoResize: true,
  layout: {
    hierarchical: false,
  },
  interaction: {
    dragNodes: true,
    zoomView: false,
  },
  nodes: {
    size: 30,
    borderWidth: 0,
    color: {
      border: "rgb(91, 80, 82)",
      background: "rgb(91, 80, 82)",
    },
    font: {
      color: "rgb(91, 80, 82)",
    },
  },
  edges: {
    color: "rgb(91, 80, 82)",
    arrows: {
      to: {
        enabled: false,
      },
    },
  },
  height: "100%",
  width: "100%",
} as const;

export function handleGraphEvent({
  graph,
  setNodeSelections,
  setIsWebOfSoilModalOpen,
}: {
  graph: { nodes: Node[]; edges: Edge[] };
  setNodeSelections: React.Dispatch<React.SetStateAction<NodeSelections>>;
  setIsWebOfSoilModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return {
    select({ nodes, edges }: { nodes: string[]; edges: string[] }) {
      if (!nodes.length || !edges.length) {
        return;
      }
      const [id] = nodes;
      if (id) {
        if (edges.length === 1) {
          const [edge] = edges;
          if (edge) {
            let connections: NodeSelections = [];
            const first = graph.nodes.find((node) => node.id === id);
            if (first) {
              connections.push({ ...first, active: true });
            }
            function findEdges(edgeId: string) {
              const connection = graph.edges.find((e) => e.id === edgeId);
              const allEdges = graph.edges.filter(
                (e) => e.to === connection?.from
              );
              if (connection && allEdges.length === 1) {
                const node = graph.nodes.find((node) =>
                  node.to.find((to) =>
                    to.toLowerCase().includes(connection.to.toLowerCase())
                  )
                );
                if (node) {
                  connections.push({ ...node, active: false });
                  const foundEdge = graph.edges.find((edge) =>
                    edge.to.includes(node.id)
                  );
                  if (foundEdge?.id) {
                    findEdges(foundEdge.id);
                  }
                }
              } else {
                const node = graph.nodes.find((node) =>
                  node.to.find((to) =>
                    to
                      .toLowerCase()
                      .includes(connection?.to?.toLowerCase() ?? "")
                  )
                );
                if (node) {
                  connections.push({ ...node, active: false });
                  connections.push(
                    ...graph.nodes
                      .filter((n) => n.to.includes(node.id))
                      .map((n) => ({ ...n, active: false }))
                  );
                }
              }
            }
            findEdges(edge);
            setNodeSelections(connections);
          }
        } else {
          const connectedNodes = graph.nodes
            .filter((node) => node.to.includes(id))
            .map((node) => ({ ...node, active: false }));
          const selectedNode = graph.nodes.find((node) => node.id === id);
          if (selectedNode) {
            const nodeSelections = [
              { ...selectedNode, active: true },
              ...connectedNodes,
            ];
            setNodeSelections(nodeSelections);
          }
        }
      }
      setIsWebOfSoilModalOpen(true);
    },
  };
}
