import React, { useState } from 'react';
import { atualizarTarefa } from '../utils/edit';
import { TextField, Button } from '../components';

const TarefaEdit = ({ tarefa, onClose, onTarefaUpdated }) => {
  const [editTarefa, setEditTarefa] = useState({
    tarefa: tarefa.tarefa,
    data: tarefa.data,
    descricao: tarefa.descricao,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTarefa({ ...editTarefa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await atualizarTarefa(tarefa.id, editTarefa);
    onTarefaUpdated();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="tarefa"
        label="Tarefa"
        value={editTarefa.tarefa}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="data"
        label="Data"
        type="date"
        value={editTarefa.data}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="descricao"
        label="Descrição"
        multiline
        rows={4}
        value={editTarefa.descricao}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" text="Salvar" />
    </form>
  );
};

export default TarefaEdit;
