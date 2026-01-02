import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submission schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  modelInterest: z.string().min(1, "Please select a model"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactSubmission = ContactFormData & {
  id: string;
  submittedAt: string;
};

// Ferrari model data type
export interface FerrariModel {
  id: string;
  name: string;
  tagline: string;
  horsepower: string;
  acceleration: string;
  topSpeed: string;
  price: string;
  image: string;
}
