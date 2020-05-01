// const {sum} = require('./intro')
// to check age of visitor is > 18 for example XD My creative thought 
// ..

const functions = require('./intro')

test('Adds 2 + 2 = 4', () => { 
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => { 
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => { 
    expect(functions.isNull()).toBeNull();
});

// to be applies to primitive types only. So we using toEqual here
test('User should be Stas Sheveliukhin Object', () => { 
    expect(functions.createUser()).toEqual({firstName : 'Stas', lastName: 'Sheveliukhin'});
});

// Less than and greater than
// Amazon gift card - 250$ My creative thought #2
test('Sum of goods prices should be less than 250$', () => { 
    const good_1_price = 18;
    const good_2_price = 149.99;
    const good_3_price = 57.42;
    expect(good_1_price + good_2_price + good_3_price).toBeLessThan(250)
}) 

// Regex
// If I put 'a'
// Expected pattern: not /a/
// Received string: "te|a|m"
test('There is no I in team', () => { 
    expect('team').not.toMatch(/I/);
});

// Arrays 
test('Admin should be in usernames', () => {
    usernames = ['john', 'stas', 'tilek', 'dmitry', 'admin'];
    expect(usernames).toContain('admin');
})

// Working with async data 
// Expected one assertion to be called but received zero assertion calls.
test('User fetched name should be Kurtis Weissnat', () => {
        // https://assertible.com/docs/guide/assertions
        // Assertions allow you to validate HTTP responses in your API tests
        // For example, a basic assertion would ensure that a request to assertible.com returns a Status code 200 
        // every time -- or that the homepage contains the text Assertible.
        expect.assertions(1);
        return functions.fetchUser().then(data => {
            expect(data.name).toEqual('Kurtis Weissnat');
        });
    });

// Минут 40 потратил из-затого что посамовольничал и "toEqual" заменил на "toBe" типо имя это простой тип String
// И ошибку потом искал в другом месте в assertion'ах. Читал документации, смотрел другие видео уроки
