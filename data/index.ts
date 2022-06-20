import { z } from 'zod'
import data from './recipes.json'

// "accomplishment_shrine": { "ingredients": [ [ "goldnugget", 10 ], [ "cutstone", 1 ], [ "gears", 6 ] ], "tab": "SCIENCE", "tech": "SCIENCE_TWO" },

const recipeSchema = z.object({
  ingredients: z.array(z.tuple([z.string(), z.number()])),
  tab: z.string(),
  tech: z.string(),
})

const schema = z.record(z.string(), recipeSchema)
export const recipesObject = schema.parse(data)
