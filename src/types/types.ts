import type { Tables } from './database.types';

type TeamRow = Tables<'teams'>;
type ProjectRow = Tables<'projects'>;
type ColumnRow = Tables<'columns'>;
type IssueRow = Tables<'issues'>;

export type { TeamRow, ProjectRow, ColumnRow, IssueRow };
