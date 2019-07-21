export interface Profile {
  id: string;
  nickname: string;
  age: number;
  photoURL: string;
}

// Photos from: https://source.unsplash.com/600x600/?cat
const profileList: Array<Profile> = [
  { id: 'DggLCgcBCwQFBAUCBAcOCA', nickname: 'レオ', age: 3, photoURL: 'https://images.unsplash.com/photo-1540575422171-0c5154297ff8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'DAsDBAIGDQ0HBQUFBAAPCw', nickname: 'マル', age: 5, photoURL: 'https://images.unsplash.com/photo-1520251572963-9d58abaa293c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'AwgGAwUCCA4GBQIGBA0BBg', nickname: 'カツ', age: 4, photoURL: 'https://images.unsplash.com/photo-1515125786-9347aff3c549?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'CwgICAIGDg8NAQIGBAcPDg', nickname: 'ナナ', age: 6, photoURL: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'DAcICAwCAwcKDgsLBAAIBQ', nickname: 'マロン', age: 5, photoURL: 'https://images.unsplash.com/photo-1547270785-e11cb938d594?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'DAIKBggJDQ8NBg0BBAwNDA', nickname: 'モモ', age: 5, photoURL: 'https://images.unsplash.com/photo-1510496181475-4e6aa39fd708?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'CAgBBQkEAgcBAwABBAMFDw', nickname: 'ハル', age: 6, photoURL: 'https://images.unsplash.com/photo-1557862355-b2b9c2614706?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'DwINCAoKBQICBAsJBAIOAw', nickname: 'ハナ', age: 3, photoURL: 'https://images.unsplash.com/photo-1457781124770-31d58ecd4be3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'Ag0GDgwHDgYJBQYDBAACBQ', nickname: 'フク', age: 5, photoURL: 'https://images.unsplash.com/photo-1495365043435-a7d3df121147?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'DAkCCgUEBwULDgwJBAkJAA', nickname: 'レオン', age: 3, photoURL: 'https://images.unsplash.com/photo-1490481920145-fc78891bbb99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'AwMDAwABDwYOBQ8MBAgBAw', nickname: 'ムギ', age: 7, photoURL: 'https://images.unsplash.com/photo-1465077135029-626d853c33dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'AQwKCAcHDw4ECwYJBAkABQ', nickname: 'キナコ', age: 8, photoURL: 'https://images.unsplash.com/photo-1523114912576-3b46eb4195eb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'BwUFAQgPCAQAAwAIBAIDAA', nickname: 'ココ', age: 5, photoURL: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'Dg0ICgYCCAgCCgUPBAoABg', nickname: 'ルナ', age: 5, photoURL: 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'DQ4IBw8AAgwNDQoPBAAOCg', nickname: 'リン', age: 6, photoURL: 'https://images.unsplash.com/photo-1554024602-f082a8c3dc30?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'AQYLAwQKDwQLCQgKBA0KAw', nickname: 'コタロウ', age: 6, photoURL: 'https://images.unsplash.com/photo-1562509435-05b0b38c5463?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'AAMADwoPDwcKAQUKBAMHDg', nickname: 'コテツ', age: 7, photoURL: 'https://images.unsplash.com/photo-1455525928928-837c99714248?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'CQILAAQCDQcHAAoLBAQFDA', nickname: 'ソラ', age: 3, photoURL: 'https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'AwECBQMBCwENAgUBBAwGBg', nickname: 'ムギ', age: 6, photoURL: 'https://images.unsplash.com/photo-1469569946320-b4f13e4b7d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'BAQOBAkDAAIKAAEDBAcFAQ', nickname: 'メイ', age: 8, photoURL: 'https://images.unsplash.com/photo-1547955762-afeea3065f22?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' },
  { id: 'BwkEAA4PAwQIDgwBBAoFBA', nickname: 'サクラ', age: 6, photoURL: 'https://images.unsplash.com/photo-1448222993383-a2fff2914d27?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600' }
];

function fakeDelay (time: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, time));
}

export class ProfileService {
  currentIndex: number;

  constructor () {
    this.currentIndex = 0;
  }

  async getProfiles ({ limit = 2 }): Promise<Array<Profile>> {
    await fakeDelay(Math.random() * 1000);
    const selectedProfiles = profileList.slice(this.currentIndex, this.currentIndex + limit);
    this.currentIndex += limit;
    return selectedProfiles;
  }
}
