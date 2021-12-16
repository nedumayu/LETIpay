import React from "react";

export const PaymentTable = ({data}) => {
    return (

        <div>
            {data.length !== 0 ?
                <div>
                    <h3 style={{marginTop: "20px"}}>Список платежей</h3>
                    <table className="account-table">
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Название</td>
                            <td>Сумма</td>
                            <td>Дата</td>
                            <td>ФИО студента</td>
                        </tr>
                        </thead>
                        <tbody>{
                            data.map(
                                data =>
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.payName}</td>
                                        <td>{data.paySum}</td>
                                        <td>{data.payDate}</td>
                                        <td>{data.user.username}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div> :
                <div style={{width: "1200px"}}>
                    <hr/>
                    <h3 style={{margin: "50px 0"}}>Платежей пока нет!</h3>
                </div>}
        </div>
    );
}