import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../style/Home.css";
import Swal from "sweetalert2";

export default function Home() {
  const [buku, setBuku] = useState([]); //State berfungsi untuk menyimpan data sementara

  const getAll = () => {
    axios
      .get("http://localhost:8000/daftarBuku")
      .then((res) => {
        // untuk menge push data setelah di edit
        setBuku(res.data);
      })
      .catch((error) => {
        // => untuk mengetahui jika terjadi error
        alert("Terjadi kesalahan " + error);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  // menthod untuk menghapus sebuah data sesuai dengan id nya
  const deleteUser = async (id) => {
    await Swal.fire({
      title: 'Yakin ingin menghapus data ini?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:8000/daftarBuku/" + id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
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
            {localStorage.getItem("id") !== null ? <th>Aksi</th> : <></>}
          </tr>
        </thead>
        <tbody>
          {buku.map(
            (
              book,
              index //map => untuk memetakan sebuah data
            ) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.deskripsi}</td>
                <td>{book.tahunTerbit}</td>
                <td>{book.pengarang}</td>
                {localStorage.getItem("id") !== null ? (
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
                ) : (
                  <></>
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
