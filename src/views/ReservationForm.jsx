import React, { useState } from 'react';
import { useGlobal } from '../provider/GlobalProvider';

const ReservaForm = () => {
  const [form, setForm] = useState({
    placa: '',
    dono: '',
    numeroApartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    estacionamento: '',
  });

  const { reservations, setReservations } = useGlobal();

  const addReserva = (reservation) => {
    setReservations(reservations.map(data => {
      if(reservation.estacionamento == data.estacionamento){
        return {...reservation, ocupado: true}
      }else{
        return data
      }
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReserva(form);
    console.log(form);
    alert("Cadastro realizado com sucesso!")
    setForm({
      placa: '',
      dono: '',
      numeroApartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      estacionamento: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="placa" value={form.placa} onChange={handleChange} placeholder="Placa do veículo" required />
      <input name="dono" value={form.dono} onChange={handleChange} placeholder="Nome do proprietário" required />
      <input name="numeroApartamento" value={form.numeroApartamento} onChange={handleChange} placeholder="Número do apartamento" required />
      <input name="bloco" value={form.bloco} onChange={handleChange} placeholder="Bloco do apartamento" required />
      <input name="modelo" value={form.modelo} onChange={handleChange} placeholder="modelo do veículo" required />
      <input name="cor" value={form.cor} onChange={handleChange} placeholder="Cor do veículo" required />
      
      <select name="estacionamento" value={form.estacionamento} onChange={handleChange} placeholder="Número da vaga" required >\
        <option>Número da vaga</option>
        {reservations.map(({estacionamento, ocupado}) => {
          return (
            <option value={estacionamento} disabled={ocupado} className='estacionamentoOptions'>
              {estacionamento} {ocupado && "🚗"}
            </option>
          )
        })}
      </select>
      <button type="submit">Registrar Reserva</button>
    </form>
  );
};

export default ReservaForm;
