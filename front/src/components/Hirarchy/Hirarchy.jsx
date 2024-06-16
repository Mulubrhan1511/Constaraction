import React from 'react';
import Testimonials from '../Testimonials/Testimonials';

const Hierarchy = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      
      <div className="container mx-auto text-center pt-24">
        <div className="items-center justify-center flex">
          <div className="text-center">
          <h1 className="text-3xl ">Organization Hirarchy</h1>
            {/* CEO */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-16">
                <img
                  className="block rounded-full m-auto shadow-md"
                  alt="Duc Sun"
                  src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718460835/manager_p6mrai.jpg"
                />
              </div>
              <div className="text-gray-600">
                <p>Ngus teklay</p>
                <p>General Manager</p>
              </div>
            </div>
            <ul className="flex flex-row mt-10 justify-center">
              {/* Vertical line */}
              <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
              <li className="relative p-6">
                {/* Horizontal line */}
                <div
                  className="border-t-2 absolute h-8 border-gray-400 top-0"
                  style={{ left: '50%', right: '0px' }}
                ></div>
                <div className="relative flex justify-center">
                  <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                  <div className="text-center">
                    {/* Management */}
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-16">
                        <img
                          className="block rounded-full m-auto shadow-md"
                          alt="Leo Six"
                          src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718461148/depp_p8rsfb.jpg"
                        />
                      </div>
                      <div className="text-gray-600">
                        <p>department</p>
                        <p>diff dipartments</p>
                      </div>
                    </div>
                    <ul className="flex flex-row mt-10 justify-center">
                      {/* Vertical line */}
                      <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                      <li className="relative p-6">
                        {/* Horizontal line */}
                        <div
                          className="border-t-2 absolute h-8 border-gray-400 top-0"
                          style={{ left: '50%', right: '0px' }}
                        ></div>
                        <div className="relative flex justify-center">
                          <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                          <div className="text-center">
                            {/* Project Manager */}
                            <div className="flex flex-col justify-center items-center">
                              <div className="w-16">
                                <img
                                  className="block rounded-full m-auto shadow-md"
                                  alt="Tab Han"
                                  src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718461149/design_pc7kyf.jpg"
                                />
                              </div>
                              <div className="text-gray-600">
                                <p>Design and engineering</p>
                                {/* <p>  </p> */}
                              </div>
                            </div>
                            <ul className="flex flex-row mt-10 justify-center">
                              {/* Vertical line */}
                              <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                              <li className="relative p-6">
                                {/* Horizontal line */}
                                <div
                                  className="border-t-2 absolute h-8 border-gray-400 top-0"
                                  style={{ left: '50%', right: '0px' }}
                                ></div>
                                <div className="relative flex justify-center">
                                  <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                                  <div className="text-center">
                                    {/* Team Lead */}
                                    <div className="flex flex-col justify-center items-center">
                                      <div className="w-16">
                                        <img
                                          className="block rounded-full m-auto shadow-md"
                                          alt="Daniel Zhou"
                                          src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718461149/const_eap2qn.jpg"
                                        />
                                      </div>
                                      <div className="text-gray-600">
                                        <p>
                                        construction department</p>
                                        {/* <p>Team Lead</p> */}
                                      </div>
                                    </div>
                                    <ul className="flex flex-row mt-10 justify-center">
                                      {/* Vertical line */}
                                      <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
                                      <li className="relative p-6">
                                        {/* Horizontal line */}
                                        <div
                                          className="border-t-2 absolute h-8 border-gray-400 top-0"
                                          style={{ left: '50%', right: '0px' }}
                                        ></div>
                                        <div className="relative flex justify-center">
                                          <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                                          <div className="text-center">
                                            {/* Developer */}
                                            <div className="flex flex-col justify-center items-center">
                                              <div className="w-16">
                                                <img
                                                  className="block rounded-full m-auto shadow-md"
                                                  alt="Patrick Wang"
                                                  src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718461148/finam_mh5n4i.jpg"
                                                />
                                              </div>
                                              <div className="text-gray-600">
                                                <p>finance department</p>
                                                {/* <p>Developer</p> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      {/* End of Developer */}
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/* End of Team Lead */}
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* End of Project Manager */}
                    </ul>
                  </div>
                </div>
              </li>
              {/* End of Management */}
              <li className="relative p-6">
                {/* Horizontal line */}
                <div
                  className="border-t-2 absolute h-8 border-gray-400 top-0"
                  style={{ left: '0px', right: '0px' }}
                ></div>
                <div className="relative flex justify-center">
                  <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                  <div className="text-center">
                    {/* HR */}
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-16">
                        <img
                          className="block rounded-full m-auto shadow-md"
                          alt="Shi Ten"
                          src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718461563/hr_bki5zu.jpg"
                        />
                      </div>
                      <div className="text-gray-600">
                        <p>Department of HR </p>
                        <p>HR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End of HR */}
              <li className="relative p-6">
                {/* Horizontal line */}
                <div
                  className="border-t-2 absolute h-8 border-gray-400 top-0"
                  style={{ left: '0px', right: '50%' }}
                ></div>
                <div className="relative flex justify-center">
                  <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
                  <div className="text-center">
                    {/* Admin */}
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-16">
                        <img
                          className="block rounded-full m-auto shadow-md"
                          alt="Shawn Mong"
                          src="https://res.cloudinary.com/diulu4bz3/image/upload/v1718461476/law_qgl3tz.jpg"
                        />
                      </div>
                      <div className="text-gray-600">
                        <p>Department of law</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End of Admin */}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hierarchy;