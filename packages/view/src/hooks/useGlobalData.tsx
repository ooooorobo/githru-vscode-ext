import type { Dispatch, ReactNode } from "react";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ClusterNode } from "types";

import { useGetTotalData } from "./useGetTotalData";
import type ClusterData from "../common/model/ClusterData";

type GlobalDataState = {
  data: ClusterNode[];
  clusterData: ClusterData;
  filteredData: ClusterNode[];
  selectedData: ClusterNode[];
  setFilteredData: Dispatch<React.SetStateAction<ClusterNode[]>>;
  setSelectedData: Dispatch<React.SetStateAction<ClusterNode[]>>;
};

export const GlobalDataContext = createContext<GlobalDataState>(
  {} as GlobalDataState
);

export function GlobalDataProvider({ children }: { children: ReactNode }) {
  const { data, clusterData } = useGetTotalData();
  const [filteredData, setFilteredData] = useState<ClusterNode[]>(data);
  const [selectedData, setSelectedData] = useState<ClusterNode[]>([]);

  useEffect(() => {
    setFilteredData(data.reverse());
  }, [data]);

  useEffect(() => {
    setSelectedData([]);
  }, [filteredData]);

  const value = useMemo(
    () => ({
      data,
      clusterData,
      filteredData,
      setFilteredData,
      selectedData,
      setSelectedData,
    }),
    [clusterData, data, filteredData, selectedData]
  );
  if (!data.length || !filteredData.length) return null;

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export const useGlobalData = () => {
  const globalData = useContext<GlobalDataState>(GlobalDataContext);
  return {
    ...globalData,
    data: globalData?.data ?? [],
    clusterData: globalData.clusterData,
    filteredData: globalData?.filteredData ?? [],
    selectedData: globalData?.selectedData ?? null,
  };
};
