import { Block, JeChain } from './jechain.js';

export function log(obj) {
  JeChain.addBlock(new Block(Date.now().toString(), obj));
}

export function view() {
  return JeChain.chain;
}
