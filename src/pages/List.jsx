import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, TableList, Grid, Typography, Navbar } from '../components';
import { listarTarefas } from '../utils/list';
import { excluirTarefa, marcarComoConcluida } from '../utils/edit';
import TarefaEdit from './TarefaEdit';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const CustomGridItem = styled(Grid)`
  && {
    margin: 16px;
    padding: 0 !important;
  }
`;

const TarefaContainer = styled.div`
  background-color: ${(props) => (props.concluida ? '#d4edda' : 'inherit')};
  text-decoration: ${(props) => (props.concluida ? 'line-through' : 'none')};
  padding: 10px;
  border-radius: 5px;
`;

const List = ({ props, breakpoints }) => {
  const [tarefas, setTarefas] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedTarefa, setSelectedTarefa] = useState(null);
  const { small, medium, large } = breakpoints;

  useEffect(() => {
    fetchTarefas();
  }, []);

  async function fetchTarefas() {
    const tarefasList = await listarTarefas();
    setTarefas(tarefasList);
  }

  const handleOpenEditModal = (tarefa) => {
    setSelectedTarefa(tarefa);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedTarefa(null);
    fetchTarefas();
  };

  const handleOpenConfirmModal = (tarefa) => {
    setSelectedTarefa(tarefa);
    setConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalOpen(false);
    setSelectedTarefa(null);
    fetchTarefas();
  };

  const handleDelete = async () => {
    if (selectedTarefa) {
      await excluirTarefa(selectedTarefa.id);
      handleCloseConfirmModal();
    }
  };

  const handleComplete = async (tarefa) => {
    if (tarefa) {
      await marcarComoConcluida(tarefa.id);
      fetchTarefas();
    }
  };

  return (
    <>
      <Navbar variant="menu" breakpoints={breakpoints} />
      <Div>
        <Grid
          container
          spacing={3}
          maxWidth="700px"
          alignItems="center"
          sx={{
            backgroundColor: '#60c0bf',
            padding: '20px',
            margin: 0,
            border: 'solid 3px',
            borderRadius: '5px',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CustomGridItem item xs={12}>
            <Typography variant="h5" textAlign="center">
              Lista de Tarefas
            </Typography>
          </CustomGridItem>
          <CustomGridItem item xs={12}>
            <TableList
              breakpoints={breakpoints}
              headers={['Tarefa', 'Data', 'Descrição', 'Ações']}
              data={tarefas.map((tarefa) => ({
                tarefa: (
                  <TarefaContainer concluida={tarefa.concluida}>
                    {tarefa.tarefa}
                  </TarefaContainer>
                ),
                data: tarefa.data,
                descricao: tarefa.descricao,
                acoes: (
                  <div>
                    <DoneIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleComplete(tarefa)}
                    />
                    <EditIcon
                      style={{ cursor: 'pointer', marginRight: '5px' }}
                      onClick={() => handleOpenEditModal(tarefa)}
                    />
                    <DeleteIcon
                      style={{ cursor: 'pointer', marginRight: '5px' }}
                      onClick={() => handleOpenConfirmModal(tarefa)}
                    />
                  </div>
                ),
              }))}
            />
          </CustomGridItem>
        </Grid>
        <Modal
          breakpoints={breakpoints}
          open={editModalOpen}
          onClose={handleCloseEditModal}
          title="Editar Tarefa"
        >
          {selectedTarefa && (
            <TarefaEdit
              tarefa={selectedTarefa}
              onClose={handleCloseEditModal}
              onTarefaUpdated={fetchTarefas}
            />
          )}
        </Modal>
        <Modal
          breakpoints={breakpoints}
          open={confirmModalOpen}
          onClose={handleCloseConfirmModal}
          title="Confirmar Exclusão"
          onConfirm={handleDelete}
        >
          <Typography variant="body">
            Tem certeza que deseja excluir esta tarefa?
          </Typography>
        </Modal>
      </Div>
    </>
  );
};

export default List;
