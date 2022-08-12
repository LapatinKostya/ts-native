function increaseAge(u: UserType) {
    u.age++
}

export type UserType = {
    name: string
    age: number
}

test('Array reference test', () => {
    const users: Array<UserType> = [
        {name: 'Kostya', age: 22},
        {name: 'Valera', age: 54}
    ]
    const admins = users

    admins.push({name: 'gadost', age: 23})

    expect(admins[2]).toEqual({name: 'gadost', age: 23})
    expect(users[2]).toEqual({name: 'gadost', age: 23})

})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount

    adminsCount += 1

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)

})

test('reference test', () => {
    const user = {
        name: 'Kostya',
        age: 22,
        address: {
            title: 'Tynda'
        }
    }
    const addr = user.address

    let user2 = {
        name: 'Tanya',
        age: 22,
        address: user.address
    }
    user2.address.title = 'Bali'

    expect(user.address.title).toEqual('Bali')
})

test('reference type array test', () => {
    const address = {
        title: 'London'
    }
    const user = {
        name: 'Kostya',
        age: 22,
        address: address
    }
    const user2 = {
        name: 'Tanya',
        age: 22,
        address: address
    }
    const users = [user, user2, {
        name: 'Sasha',
        age: 18,
        address: address
    }]

    const admins = [user, user2]

    admins[0].name = 'Konstantin'

    expect(users[0].name).toBe('Konstantin')
    expect(user.name).toBe('Konstantin')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'f']
    passportist(letters)
    expect(letters).toEqual(['c', 'd', 'a', 'f'])
})

function passportist(letters: any) {
    const copy = [...letters]
    copy.sort();
    console.log(copy)
}