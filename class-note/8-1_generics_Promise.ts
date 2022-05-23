interface PersonalData {
  name: string;
  address: string;
  age: number;
}

function getPersonalDataApi(): Promise<PersonalData[]> {
  const sampleData: PersonalData[] = [
    {
      name: 'aaa',
      address: 'aaa',
      age: 30
    },
    {
      name: 'bbb',
      address: 'bbb',
      age: 22
    }
  ];

  return new Promise( resolve => {() => resolve(sampleData)});
}