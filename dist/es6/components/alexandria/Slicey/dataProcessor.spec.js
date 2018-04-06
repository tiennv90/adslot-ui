'use strict';

import { QUARTER, HALF, ROUND, getPointX, getPointY } from './dataProcessor';

describe('DataProcessor', function () {
  it('should export constants', function () {
    expect(QUARTER).to.equal(Math.PI / 2);
    expect(HALF).to.equal(Math.PI);
    expect(ROUND).to.equal(Math.PI * 2);
  });

  it('should export point methods', function () {
    expect(getPointX(Math.PI)).to.equal(-0.5);
    expect(getPointY(Math.PI / 2)).to.equal(0.5);
  });
});