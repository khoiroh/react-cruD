import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../style/Home.css"

export default function Home() {
    const [buku, setBuku] = useState([]); //State berfungsi untuk menyimpan data sementara

    const getAll = () => {
        axios
        .get("http://localhost:8000/daftarBuku")
        .then((res) => {          // untuk menge push data setelah di edit
            setBuku(res.data);
        })
        .catch((error) => {   // => untuk mengetahui jika terjadi error
            alert("Terjadi kesalahan " + error);
        });
    };

    useEffect(() => {
        getAll();
    }, []);

    // menthod untuk menghapus sebuah data sesuai dengan id nya
    const deleteUser = async (id) => {
        axios.delete("http://localhost:8000/daftarBuku/" + id);
        alert("user berhasil di hapus gays!!");
        getAll();
    };

  return (
    <div className="container my-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Tahun Terbit</th>
            <th>Pengarang</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((book, index) => ( //map => untuk memetakan sebuah data 
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.judul}</td>
              <td>{book.deskripsi}</td>
              <td>{book.tahunTerbit}</td>
              <td>{book.pengarang}</td>
              <td>
                <Button 
                  variant="danger"
                  className="mx-1"
                  onClick={() => deleteUser(book.id)}
                >
                  Delete
                </Button>
                <a href={"/edit/" + book.id}>
                  <Button variant="success" className="mx-1">
                    Edit
                  </Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
