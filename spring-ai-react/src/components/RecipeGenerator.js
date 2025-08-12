import React, {useState} from "react";  

function RecipeGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');

    const generateRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:8080/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`);
            const data = await response.text();
            setRecipe(data);
            setIngredients('');
        } catch (error) {
            console.error("Error generating recipe:", error);
        }
    };

  return (
    <div>
      <h2>Recipe Generator</h2>
      <input type="text" placeholder="Enter Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <input type="text" placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
      <input type="text" placeholder="Dietary Restrictions" value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)} />
      <button onClick={generateRecipe}>Generate Recipe</button>

      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
}

export default RecipeGenerator;
