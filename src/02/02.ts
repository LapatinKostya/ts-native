type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>
}
type addressType = {
    streetTitle: string
    city: cityType
}
type technologiesType = {
    id: number
    title: string
}
type cityType = {
    title: string
    countryTitle: string
}

const student: studentType = {
    id: 1,
    name: 'Kostya',
    age: 22,
    isActive: true,
    address: {
        streetTitle: 'Politechnicheskaya',
        city: {
            title: 'Saint-Petersburg',
            countryTitle: 'Russia',
        },
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
console.log(student.age)
console.log(student.name)
console.log(student.isActive)
console.log(student.technologies.map(el => el.title))
