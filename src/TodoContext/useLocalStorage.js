import React from "react";

// Custom Hooks
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
   // Uso de useEffect()
    React.useEffect(() => {
  
      setTimeout(() => {
        try {
          const localStorageTodos = localStorage.getItem(itemName);
          let parsedTodos;
  
          // Se verifica si ya existe informacion almacenada, sino se crea.
          if (!localStorageTodos) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedTodos = [];
          } else {
            parsedTodos = JSON.parse(localStorageTodos);
          }
  
          setItem(parsedTodos);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
      }, 2000);
    }, []);
  
    const saveItem = (newArr) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newArr));
        setItem(newArr);
      } catch (error) {
        setError(true);
      }

    };
  
    return { item, saveItem, loading, error };
  }


  export { useLocalStorage };