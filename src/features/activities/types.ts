export type ActivityType = "call" | "meeting" | "email" | "other";

export interface Activity {
    id: string;
    contactId: string;
    type: ActivityType;
    description?: string;
    date: string;
}
