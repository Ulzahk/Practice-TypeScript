(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = 'asd';
  myDynamicVar = null;
  myDynamicVar = {};

  myDynamicVar = 'Hello';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log({ rta });

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log({ rta2 });
})();