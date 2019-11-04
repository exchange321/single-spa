export const resolveAll = (promises) => (
  promises.reduce((acc, p) => (
    acc.then(() => p)
  ), Promise.resolve())
)
