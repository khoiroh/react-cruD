import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import "../style/Nav.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function NavigationBar() {
  const [show, setShow] = useState(false);
  const [judul, setJudul] = useState(""); //State berfungsi untuk menyimpan data sementara
  const [deskripsi, setDeskripsi] = useState("");
  const [tahunTerbit, setTahunTerbit] = useState("");
  const [pengarang, setPengarang] = useState("");

  const handleClose = () => setShow(false); // handleClose untuk menyetel ke false
  const handleShow = () => setShow(true); // handleShow untuk menyetel ke true

  const addUser = async (e) => {
    e.preventDefault();

    const data = {
      judul: judul,
      deskripsi: deskripsi,
      tahunTerbit: tahunTerbit,
      pengarang: pengarang,
    };

    await axios.post(" http://localhost:8000/daftarBuku", data);
    Swal.fire("Good job!", "You clicked the button!", "success")
      .then(() => {
        // untuk menge push data setelah di edit
        window.location.reload();
      })
      .catch((error) => {
        // alert untuk mengetahui terjadinya error
        alert("Terjadi kesalahan " + error);
      });
  };

  const history = useHistory();

  const logout = () => {
    window.location.reload();
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Perpustakaan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              {localStorage.getItem("id") !== null ? (
                <>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-warning"
                      onClick={handleShow}
                    >
                      Tambah Buku
                    </button>
                  </li>
                  <li className="nav-item float-right">
                    <a className="btn" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item float-right">
                  <a className="btn" href="/login">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="daldal" closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addUser} menthod="POST">
            <div className="mb-3">
              <Form.Label>
                <strong>Judul</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Massukan Judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Deskripsi</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Massukan Deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Tahun Terbit</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  type="date"
                  placeholder="Massukan Tahun Terbit"
                  value={tahunTerbit}
                  onChange={(e) => setTahunTerbit(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Form.Label>
                <strong>Pengarang</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Massukan Pengarang"
                  value={pengarang}
                  onChange={(e) => setPengarang(e.target.value)}
                />
              </InputGroup>
            </div>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
            ||
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleClose}
            >
              Save
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NavigationBar;
