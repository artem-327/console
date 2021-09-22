const temp: (...data: any[]) => void = console.log;

console.log = function (): void {
    let args: any[] = Array.from(arguments);

    args = args
        .map((arg) => {
            return [arg, typeof arg];
        })
        .flat();

    temp.apply(console, args);
};

console.log(3);
console.log("a");
console.log(2, "a");
