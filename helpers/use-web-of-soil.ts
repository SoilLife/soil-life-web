import { useEffect, useState } from 'react';

import { uniqBy } from 'lodash';

const spreadsheetId = '1GjpYaQbXVWIEn68iYyW0XiEQKJD6sL_4WJYI0ZSbE4s';

export type Node = {
  id: string;
  label: string;
  description: string;
  link: undefined | string;
  image: undefined | string;
  shape: 'circularImage';
  to: string[];
  size?: number;
};

type Edge = {
  from: string;
  to: string;
  length?: number;
  id?: string;
};

export function useWebOfSoils(
  sheetName:
    | 'food data structure'
    | 'filter data structure'
    | 'foundations data structure'
    | 'fiber data structure'
    | 'fun data structure'
    | 'farmaceuticals data structure'
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [graph, setGraph] = useState<{
    nodes: Node[];
    edges: Edge[];
  }>({
    nodes: [],
    edges: [],
  });

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=${sheetName}`)
        .then((res) => {
          if (res.ok) {
            return res.text();
          } else throw Error();
        })
        .then((res: string) => {
          if (res) {
            const items = res.split('\n')[1];
            if (items) {
              const parsedJSON = JSON.parse(items.replace(/google.visualization.Query.setResponse\(|\);/g, ''));
              const [headerRow, ...originalRows] = parsedJSON.table.rows;

              const headerIndices: number[] = headerRow.c
                .map((header: null | { v: string }, index: number) => {
                  if (header?.['v']) return index;
                  else return null;
                })
                .filter((header: number) => header != undefined);

              const nodes: typeof graph['nodes'] = [];

              const edges: typeof graph['edges'] = [];

              for (const item of originalRows) {
                let node: typeof graph['nodes'][0] = {
                  id: '',
                  label: '',
                  description: '',
                  link: undefined,
                  image: '/images/logo.svg',
                  shape: 'circularImage',
                  to: [],
                };

                for (const index of headerIndices) {
                  const header = headerRow['c'][index]['v']?.toLowerCase()?.trim() ?? '';
                  const cell = item.c[index]?.['v'];

                  if (!cell && header === 'name') {
                    break;
                  }

                  switch (header) {
                    case 'name':
                      node.id = cell.toLowerCase().trim();
                      node.label = cell;
                      if (cell.toLowerCase().trim() === 'soil') {
                        node.size = 50;
                      }
                      break;
                    case 'description':
                      node.description = cell;
                      break;
                    case 'link':
                      node.link = cell;
                      break;
                    case 'image':
                      const regexp = new RegExp(/^https|^http/i);
                      if (regexp.test(cell)) {
                        node.image = cell;
                      }
                      break;
                    case 'to':
                      const toEdges = cell?.split(',')?.map((value: string) => value.toLowerCase().trim()) ?? [];
                      node.to = toEdges;

                      for (const to of toEdges) {
                        const edge: typeof graph['edges'][0] = {
                          from: node.id,
                          to,
                        };
                        edges.push(edge);
                      }
                      break;
                  }
                }

                nodes.push(node);
              }

              let nodesCopy = uniqBy(nodes, 'id').sort((a, b) => {
                if (a.id && b.id) {
                  return a.id.localeCompare(b.id);
                } else return 0;
              });
              edges.sort((a, b) => {
                if (a.from && b.from) {
                  return a.from.localeCompare(b.from);
                } else return 0;
              });

              return {
                nodes: nodesCopy,
                edges,
              };
            }
          }
          return {
            nodes: [],
            edges: [],
          };
        })
        .catch((err: any) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });

      if (data) {
        setGraph(data);
      }
    }

    fetchData();
  }, []);

  return {
    loading: isLoading,
    error,
    graph,
  };
}
