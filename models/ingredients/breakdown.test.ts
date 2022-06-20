import { breakdownIngredient } from './breakdown'

test('breakdown', () => {
  expect(breakdownIngredient('campfire', 2))
    .toStrictEqual({ cutgrass: 6, log: 4 })
})
