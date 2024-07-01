const Adminuploadresumepopup = () => {
    return ( 
        <>
         <div className="modal fade show" id="uploadResumeModal" aria-hidden="true" aria-labelledby="uploadResumeModalLabel">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="uploadResumeModalLabel">Upload Resume</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <input type="file" accept="application/pdf" className="form-control" onChange={handleUpdateResume} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleUpdateResume}>Submit</button>  {/* Updated button text */}
                  </div>
                </div>
              </div>
            </div>
        </>
     );
}
 
export default Adminuploadresumepopup ;