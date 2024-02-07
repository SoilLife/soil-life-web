import ReactModal from "react-modal";
import { Icon, Text } from "ui/atoms";

// helpers
import { uniqBy } from "lodash";
import type { Node, Edge } from "helpers/use-web-of-soil";

export function WebOfSoilsGraphModal({
  graph,
  isWebOfSoilMModalOpen,
  handleCloseWebOfSoilModal,
  nodeSelections,
  handleWebOfSoilModalNodeClick,
}: {
  graph: { nodes: Node[]; edges: Edge[] };
  nodeSelections: (Node & { active: boolean })[];
  isWebOfSoilMModalOpen: boolean;
  handleCloseWebOfSoilModal: () => void;
  handleWebOfSoilModalNodeClick: (node: Node) => () => void;
}) {
  return (
    <ReactModal
      isOpen={isWebOfSoilMModalOpen}
      onRequestClose={handleCloseWebOfSoilModal}
      style={{
        content: {
          padding: 0,
          inset: "10%",
        },
      }}
    >
      <div className="relative bg-white mx-auto flex flex-col justify-center p-4 sm:p-8">
        <div className="absolute top-2 right-2 sm:top-6 sm:right-6">
          <button onClick={handleCloseWebOfSoilModal}>
            <Icon icon="x" size="32" className="text-yellow-500" />
          </button>
        </div>
        <div className="flex-shrink-0 flex flex-grow justify-center items-center overflow-x-auto space-x-2 sm:space-x-10">
          {nodeSelections.map((node) => {
            return (
              <div key={node.id} className="flex-shrink-0 text-center">
                <Text
                  type="h2"
                  weight="light"
                  size={node.active ? "lg" : "sm"}
                  className="mb-1"
                >
                  {node.label}
                </Text>
                <img
                  src={node.image}
                  className={`object-cover rounded-full mx-auto border-4 border-solid border-pink-500 ${
                    node.active
                      ? "h-20 w-20 sm:h-40 sm:w-40"
                      : "h-10 w-10 sm:h-20 sm:w-20 cursor-pointer"
                  }`}
                  onClick={handleWebOfSoilModalNodeClick(node)}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-10 mx-auto flex-grow">
          {nodeSelections.map((node) => {
            if (node.active && !node.to.length) {
              return (
                <p
                  key={node.label}
                  className="max-w-3xl mx-auto text-center font-acre-light leading-[22px]"
                >
                  {node.description}
                </p>
              );
            } else if (node.active) {
              const edges = graph.edges.filter((edge) => edge.to === node.id);
              if ((edges?.length ?? 0) > 1) {
                return (
                  <p
                    key={node.label}
                    className="max-w-3xl mx-auto text-center font-acre-light leading-[22px]"
                  >
                    {node.description}
                  </p>
                );
              } else {
                let _connectedNodes: Node[] = [];

                function findConnectedNodes(node: Node) {
                  const connectedNodes =
                    graph.nodes.filter((n) => n.to.includes(node.id)) ?? [];
                  for (const n of connectedNodes) {
                    _connectedNodes.push(n);
                    findConnectedNodes(n);
                  }
                }

                findConnectedNodes(node);

                return (
                  <div
                    key={node.label}
                    className="flex flex-col space-y-10 sm:py-10 sm:space-y-0 sm:overflow-x-auto sm:flex-row sm:space-x-10"
                  >
                    <div className="flex-shrink-0 space-y-6">
                      <h3 className="text-pink-500 font-acre-light text-[40px] leading-[48px] mb-6 text-center">
                        {node.label}
                      </h3>
                      <img
                        src={node.image?.replace("thumbnails/", "")}
                        className="h-[147px] w-[233px] object-cover mx-auto"
                      />
                      <p className="font-acre-light text-base leading-[22px] max-w-md mx-auto">
                        {node.description}
                      </p>
                    </div>
                    {uniqBy(_connectedNodes, "id").map((n) => {
                      return (
                        <div key={n.id} className="flex-shrink-0 space-y-6">
                          <h3 className="text-pink-500 font-acre-light text-[40px] leading-[48px] mb-6 text-center">
                            {n.label}
                          </h3>
                          <img
                            src={n.image?.replace("thumbnails/", "")}
                            className="h-[147px] w-[233px] object-cover mx-auto"
                          />
                          <p className="font-acre-light text-base leading-[22px] max-w-md mx-auto">
                            {n.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            }
            return null;
          })}
        </div>
      </div>
    </ReactModal>
  );
}
