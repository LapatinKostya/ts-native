type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>
}
type addressType = {
    city: string
    country: string
}
type technologiesType = {
    id: number
    title: string
}


const student: studentType = {
    id: 1,
    'name': 'Kostya',
    age: 22,
    isActive: true,
    address: {
        city: 'Moscow',
        country: 'Russia'
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
    ]
}
