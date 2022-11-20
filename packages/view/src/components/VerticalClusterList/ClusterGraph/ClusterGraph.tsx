import { useGlobalData } from "hooks";

import { getGraphHeight, getSelectedIndex } from "./ClusterGraph.util";
import { DETAIL_HEIGHT, SVG_WIDTH } from "./ClusterGraph.const";
import { useHandleClusterGraph } from "./ClusterGraph.hook";

import "./ClusterGraph.scss";

function ClusterGraph() {
  const {
    filteredData: data,
    clusterData,
    selectedData,
    setSelectedData,
  } = useGlobalData();
  const { clusterSizes } = clusterData;
  const selectedIndex = getSelectedIndex(data, selectedData);
  const graphHeight =
    getGraphHeight(clusterSizes) + selectedIndex.length * DETAIL_HEIGHT;

  const svgRef = useHandleClusterGraph({
    data,
    clusterSizes,
    selectedIndex,
    setSelectedData,
  });

  return (
    <svg
      className="cluster-graph"
      ref={svgRef}
      width={SVG_WIDTH}
      height={graphHeight}
    />
  );
}

export default ClusterGraph;
