/* eslint-env node, jest */
const { zipLongest, asyncZipLongest, asyncToArray, range } = require('iter-tools')

describe('zipLongest', function () {
  it('zips', function () {
    const iter = zipLongest([1, 2, 3], [4, 5, 6], [7, 8, 9])
    expect(Array.from(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  })

  it('zips using iterables', function () {
    const iter = zipLongest(range({ start: 1, end: 4 }), range({ start: 4, end: 7 }), [7, 8, 9])
    expect(Array.from(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  })

  it('zip stopping early', function () {
    const iter = zipLongest(range({ start: 1, end: 4 }), range({ start: 4, end: 6 }), [7, 8])
    expect(Array.from(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, undefined, undefined]])
  })
})

describe('asyncZipLongest', function () {
  it('zips', async function () {
    const iter = asyncZipLongest([1, 2, 3], [4, 5, 6], [7, 8, 9])
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  })

  it('zips using iterables', async function () {
    const iter = asyncZipLongest(range({ start: 1, end: 4 }), range({ start: 4, end: 7 }), [7, 8, 9])
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  })

  it('zip stopping early', async function () {
    const iter = asyncZipLongest(range({ start: 1, end: 4 }), range({ start: 4, end: 6 }), [7, 8])
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, undefined, undefined]])
  })
})
