let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

let unknowVar: unknown;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// unknowVar.toUpperCase();
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}

// let isNewTwo: boolean = unknowVar;
if (typeof unknowVar === 'boolean') {
  let isNewTwo: boolean = unknowVar;
}
