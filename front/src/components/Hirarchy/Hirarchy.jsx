import React from 'react';

const Hierarchy = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      
      <div className="container mx-auto text-center pt-24">
        <div className="items-center justify-center flex">
          <div className="text-center">
          <h1 className="text-3xl ">Organization Flow Chart</h1>
            {/* CEO */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-16">
                <img
                  className="block rounded-full m-auto shadow-md"
                  alt="Duc Sun"
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                />
              </div>
              <div className="text-gray-600">
                <p>Duc Sun</p>
                <p>CEO</p>
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
                          src="https://randomuser.me/api/portraits/men/83.jpg"
                        />
                      </div>
                      <div className="text-gray-600">
                        <p>Leo Six</p>
                        <p>Management</p>
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
                                  src="https://randomuser.me/api/portraits/men/46.jpg"
                                />
                              </div>
                              <div className="text-gray-600">
                                <p>Tab Han</p>
                                <p>Project Manager</p>
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
                                          src="https://randomuser.me/api/portraits/men/76.jpg"
                                        />
                                      </div>
                                      <div className="text-gray-600">
                                        <p>Daniel Zhou</p>
                                        <p>Team Lead</p>
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
                                                  src="https://randomuser.me/api/portraits/men/55.jpg"
                                                />
                                              </div>
                                              <div className="text-gray-600">
                                                <p>Patrick Wang</p>
                                                <p>Developer</p>
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
                          src="https://randomuser.me/api/portraits/men/43.jpg"
                        />
                      </div>
                      <div className="text-gray-600">
                        <p>Shi Ten</p>
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
                          src="https://randomuser.me/api/portraits/men/97.jpg"
                        />
                      </div>
                      <div className="text-gray-600">
                        <p>Shawn Mong</p>
                        <p>Admin</p>
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