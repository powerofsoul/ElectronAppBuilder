import * as React from 'react';
import { WindowProps } from '../Window';
import styled from 'styled-components';
import { Space } from '../../styles/Space';

export default class CreateProjectPageView extends React.Component<WindowProps, {}>{
    render() {
        const ButtonContainer = styled.div`
            margin-left:auto;
            margin-right:auto;

            margin-top: ${Space.md};

            & > button {
                margin-right: ${Space.md}
            }
        `;

        return <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Create Project</h3>
                </div>
            </div>
            <div className="row">
                <div className='col-3'>
                    Name:
                </div>
                <div className='col-9'>
                    <input className='form-control' />
                </div>
            </div>
            <div className="row">
                <div className='col-3'>
                    Author:
                </div>
                <div className='col-9'>
                    <input className='form-control' />
                </div>
            </div>
            <div className="row">
                <div className='col-3'>
                    Version:
                </div>
                <div className='col-9'>
                    <input className='form-control' />
                </div>
            </div>
            <div className="row">
                <ButtonContainer>
                    <button className='btn btn-success'>Create</button>
                    <button className='btn btn-danger' onClick={this.props.viewModel.close}>Cancel</button>
                </ButtonContainer>
            </div>
        </div>
    }
}