

const sum = (x:number, y:number): number => {
    return x+y;
}

it("sum two numbers", () => {
    expect(sum(1,2)).toEqual(3);
    expect(sum(2,3)).toEqual(5);
});

export default undefined;