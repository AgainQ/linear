export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      issues: {
        Row: {
          assignedTo: number | null
          createdAt: string
          createdBy: number
          description: string | null
          id: number
          priority: Database["public"]["Enums"]["Priority"]
          projectId: number
          status: Database["public"]["Enums"]["Issue Status"]
          teamId: number
          title: string
          updatedAt: string | null
        }
        Insert: {
          assignedTo?: number | null
          createdAt?: string
          createdBy: number
          description?: string | null
          id?: number
          priority: Database["public"]["Enums"]["Priority"]
          projectId: number
          status: Database["public"]["Enums"]["Issue Status"]
          teamId: number
          title: string
          updatedAt?: string | null
        }
        Update: {
          assignedTo?: number | null
          createdAt?: string
          createdBy?: number
          description?: string | null
          id?: number
          priority?: Database["public"]["Enums"]["Priority"]
          projectId?: number
          status?: Database["public"]["Enums"]["Issue Status"]
          teamId?: number
          title?: string
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "issues_projectId_fkey"
            columns: ["projectId"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issues_teamId_fkey"
            columns: ["teamId"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          color: string
          createdAt: string
          createdBy: number
          description: string | null
          id: number
          name: string
          priority: Database["public"]["Enums"]["Priority"]
          status: Database["public"]["Enums"]["Project Status"]
          teamId: number
          updatedAt: string
        }
        Insert: {
          color: string
          createdAt?: string
          createdBy: number
          description?: string | null
          id?: number
          name: string
          priority: Database["public"]["Enums"]["Priority"]
          status: Database["public"]["Enums"]["Project Status"]
          teamId: number
          updatedAt?: string
        }
        Update: {
          color?: string
          createdAt?: string
          createdBy?: number
          description?: string | null
          id?: number
          name?: string
          priority?: Database["public"]["Enums"]["Priority"]
          status?: Database["public"]["Enums"]["Project Status"]
          teamId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_teamId_fkey"
            columns: ["teamId"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          createdAt: string
          id: number
          identifier: string
          name: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          id?: number
          identifier: string
          name: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          id?: number
          identifier?: string
          name?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      "Issue Status":
        | "later"
        | "tasks"
        | "tomorrow"
        | "today"
        | "now"
        | "done"
        | "canceled"
      Priority: "none" | "low" | "medium" | "high" | "urgent"
      "Project Status":
        | "backlog"
        | "planned"
        | "active"
        | "completed"
        | "canceled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      "Issue Status": [
        "later",
        "tasks",
        "tomorrow",
        "today",
        "now",
        "done",
        "canceled",
      ],
      Priority: ["none", "low", "medium", "high", "urgent"],
      "Project Status": [
        "backlog",
        "planned",
        "active",
        "completed",
        "canceled",
      ],
    },
  },
} as const

