import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import './CustomSelect.scss';

const CustomSelect = () => {
  return (
    <div className="custom-select">
      <div className="select-wrapper">
        <select>
          <option value="vivienda">Vivienda</option>
          <option value="obra-nueva">Obra Nueva</option>
          <option value="promociones">Promociones</option>
          <option value="local-nave">Local y Nave</option>
          <option value="garaje">Garaje</option>
          <option value="oficina">Oficina</option>
          <option value="trastero">Trastero</option>
          <option value="terreno">Terreno</option>
          <option value="edificio">Edificio</option>
        </select>
        <span className="anticon-down">
          <DownOutlined />
        </span>
      </div>
    </div>
  );
};

export default CustomSelect;
