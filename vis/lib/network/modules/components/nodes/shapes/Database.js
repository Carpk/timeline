'use strict';

import NodeBase from '../util/NodeBase'

class Database extends NodeBase {
  constructor (options, body, labelModule) {
    super(options, body, labelModule);
    this._setMargins(labelModule);
  }

  resize(ctx, selected, hover) {
    if (this.needsRefresh(selected, hover)) {
      this.textSize = this.labelModule.getTextSize(ctx, selected, hover);
      var size = this.textSize.width + this.margin.right + this.margin.left;
      this.width = size;
      this.height = size;
      this.radius = this.width / 2;
    }
  }

  draw(ctx, x, y, selected, hover, values) {
    this.resize(ctx, selected, hover);
    this.left = x - this.width / 2;
    this.top  = y - this.height / 2;

    this.initContextForDraw(ctx, values);
    ctx.database(x - this.width / 2, y - this.height / 2, this.width, this.height);
    this.performFill(ctx, values);

    this.updateBoundingBox(x, y, ctx, selected, hover);
    this.labelModule.draw(ctx, this.left + this.textSize.width / 2 + this.margin.left,
                               this.top + this.textSize.height / 2 + this.margin.top, selected, hover);
  }

  distanceToBorder(ctx, angle) {
    return this._distanceToBorder(ctx,angle);
  }
}

export default Database;
