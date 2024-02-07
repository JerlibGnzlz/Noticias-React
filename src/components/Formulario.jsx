
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import useNoticias from "../hooks/useNoticias";





const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
];


export const Formulario = () => {

    const { categoria, handleChanceCategoria } = useNoticias();

    return (
        <form >
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                    label="Categoria"
                    onChange={handleChanceCategoria}
                    value={categoria}
                >

                    {CATEGORIAS.map(categoria => (
                        <MenuItem
                            key={categoria.value}
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form >


    );
};
