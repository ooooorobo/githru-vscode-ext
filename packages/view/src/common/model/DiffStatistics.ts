import type { DiffStatistics as RawDiffStatistics } from "types";

interface FileInfo {
  insertions: number;
  deletions: number;
}

interface FileInfoMap {
  [id: string]: FileInfo;
}

export default class DiffStatistics {
  public changedFileCount: number;

  public insertions: number;

  public deletions: number;

  public files: FileInfoMap;

  constructor({
    changedFileCount,
    insertions,
    deletions,
    files,
  }: RawDiffStatistics) {
    this.changedFileCount = changedFileCount;
    this.insertions = insertions;
    this.deletions = deletions;
    this.files = files;
  }
}
