import z from 'zod'

export const signupSchema = z.object({
    username: z.string().min(3),
    name: z.string(),
    password: z.string().min(6)
})

export const signinSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6)
})

export const todoSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    completed: z.boolean()
})

export const todoInputSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1)
})