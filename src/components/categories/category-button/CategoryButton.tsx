import {FunctionComponent} from "react";
import styles from '../Categories.module.sass'
import {categoryType} from "../../../../public/staticInfo";
type setCategoryType = (value: (((prevState: categoryType) => categoryType) | categoryType)) => void

const CategoryButton: FunctionComponent<{category: categoryType, chosen: categoryType, setCategory: setCategoryType}> =
    ({category, setCategory, chosen}) => {
    return <button
        className={chosen.btnText == category.btnText ? styles.categoryButtonChosen : styles.categoryButton}
        onClick={() => setCategory(category)}>
        {category.btnText}
    </button>
}

export default CategoryButton;