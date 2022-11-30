import { ButtonItem } from './Category.styles'

type CategoryType = {
  item: {
    id: number,
    value: string,
    selected: string
  }
  setSelectedCategory: (value: string) => void,
  selectedCategory: string
}

export const Category = ({ item, setSelectedCategory, selectedCategory }: CategoryType) => {
  const { value, selected } = item
  return (
    <ButtonItem
      onClick={() => setSelectedCategory(selected)}
      isSelected={selectedCategory === selected}
    >
      {value}
    </ButtonItem>
  )
}
