import type { Tables, Enums } from './database.types';

type TeamRow = Tables<'teams'>;
type ProjectRow = Tables<'projects'>;
type IssueRow = Tables<'issues'>;

type Priority = Enums<'Priority'>;
type IssueStatus = Enums<'Issue Status'>;
type ProjectStatus = Enums<'Project Status'>;

export type { TeamRow, ProjectRow, IssueRow, Priority, IssueStatus, ProjectStatus };
