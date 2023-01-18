export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
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
          operationName: string
          query: string
          variables: Json
          extensions: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      matches: {
        Row: {
          created_at: string | null
          id: number
          season_id: number
          team_1_score: number
          team_2_score: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          season_id: number
          team_1_score?: number
          team_2_score?: number
        }
        Update: {
          created_at?: string | null
          id?: number
          season_id?: number
          team_1_score?: number
          team_2_score?: number
        }
      }
      player_matches: {
        Row: {
          created_at: string | null
          id: number
          match_id: number
          player_id: number
          team_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          match_id: number
          player_id: number
          team_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          match_id?: number
          player_id?: number
          team_id?: number
        }
      }
      player_statistics: {
        Row: {
          created_at: string | null
          game_count: number
          id: number
          player_id: number
          point_count: number
          season_id: number
          win_count: number
        }
        Insert: {
          created_at?: string | null
          game_count?: number
          id?: number
          player_id: number
          point_count?: number
          season_id: number
          win_count?: number
        }
        Update: {
          created_at?: string | null
          game_count?: number
          id?: number
          player_id?: number
          point_count?: number
          season_id?: number
          win_count?: number
        }
      }
      players: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
      }
      seasons: {
        Row: {
          created_at: string | null
          ended_at: string | null
          id: number
          started_at: string
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          id?: number
          started_at: string
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          id?: number
          started_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: { size: number; bucket_id: string }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits: number
          levels: number
          offsets: number
          search: string
          sortcolumn: string
          sortorder: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

