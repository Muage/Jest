// toBe: 정확한 동일성
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// toEqual: 배열/객체 값 확인, undefined 속성, 배열 항목, 배열 희소성, 개체 유형 불일치가 있는 개체 키 무시
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// not
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// truthiness ( toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy )
test('undefine / null / zero', () => {
    const u = undefined;
    const n = null;
    const z = 0;

    // toBeNull: 값이 null과 일치
    expect(u).not.toBeNull();
    expect(n).toBeNull();
    expect(z).not.toBeNull();

    // toBeUndefined: 값이 undefined과 일치
    expect(u).toBeUndefined();
    expect(n).not.toBeUndefined();
    expect(z).not.toBeUndefined();

    // toBeDefined: toBeUndefined의 반대
    expect(u).not.toBeDefined();
    expect(n).toBeDefined();
    expect(z).toBeDefined();

    // if 조건이 참으로 취급하는 모든 것과 일치
    expect(u).not.toBeTruthy();
    expect(n).not.toBeTruthy();
    expect(z).not.toBeTruthy();

    // if 조건이 거짓으로 취급하는 모든 것과 일치
    expect(u).toBeFalsy();
    expect(n).toBeFalsy();
    expect(z).toBeFalsy();
});

// 숫자 비교 ( toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual )
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

// 소수점 비교 ( toBeCloseTo )
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);    // This won't work because of rounding error ( Expected: 0.3, Received: 0.30000000000000004 )
    // expect(value).toEqual(0.3);    // This won't work because of rounding error ( Expected: 0.3, Received: 0.30000000000000004 )
    expect(value).toBeCloseTo(0.3);
})

// 문자열 비교 ( toMatch )
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// 배열, 반복 가능 ( toContain )
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk'
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

// exceptions ( toThrow )
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/);    // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
})