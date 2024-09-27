import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import IconButton from '../IconButton';
import DoneIcon from '@mui/icons-material/Done';

const items = [
  { id: 1, tarefa: 'beber 2l de água' },
  { id: 2, tarefa: 'Estudar React' },
  { id: 3, tarefa: 'Ir para academia' },
  { id: 4, tarefa: 'Consulta no medico' },
];

export default function DefaultList(props) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const handleComplete = async (tarefa) => {
      if (tarefa) {
        await marcarComoConcluida(tarefa.id);
        fetchTarefas();
      }
    };
    props.onToggleComplete && props.onToggleComplete(value);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, margin: '10px' }}>
      {items.map((item, index) => {
        const labelId = `checkbox-list-label-${index}`;
        const isChecked = checked.indexOf(index) !== -1;

        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <IconButton edge="start" tabIndex={-1} disableRipple>
                  <DoneIcon color={isChecked ? 'primary' : 'disabled'} />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={item.tarefa}
                sx={{
                  textDecoration: isChecked ? 'line-through' : 'none',
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
