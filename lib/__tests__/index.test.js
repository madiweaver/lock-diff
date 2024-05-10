import { describe, it, expect } from 'vitest';
const { diff } = require('../');

describe('diff', () => {
  it('returns an empty object when given two empty objects', () => {
    const oldLock = {
      dependencies: {},
    };

    const newLock = {
      dependencies: {},
    };

    const changes = diff(oldLock, newLock);

    expect(changes).toEqual({});
  });
});
