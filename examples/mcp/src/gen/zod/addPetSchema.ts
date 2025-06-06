/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { addPetRequestSchema } from './addPetRequestSchema.js'
import { petSchema } from './petSchema.js'
import { z } from 'zod'

/**
 * @description Successful operation
 */
export const addPet200Schema = z.lazy(() => petSchema).schema.omit({ name: true })

/**
 * @description Pet not found
 */
export const addPet405Schema = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
})

/**
 * @description Create a new pet in the store
 */
export const addPetMutationRequestSchema = z.lazy(() => addPetRequestSchema)

export const addPetMutationResponseSchema = z.lazy(() => addPet200Schema)
