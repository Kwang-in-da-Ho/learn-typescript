
// ##################################
// 기존 방식 : 일일이 타입 선언
interface Email {
  value: string;
  selected: boolean;
}

interface Product {
  value: number;
  selected: boolean;
}
// #################################

interface DropDownItem<T> {
  value: T;
  selected: boolean;
}

// value : string, selected : boolean
// const emails: Email[] = [
const emails: DropDownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// value : number, selected : boolean
// const numberOfProducts: Product[] = [
const numberOfProducts: DropDownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropDownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
});

emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});