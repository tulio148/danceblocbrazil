import { useState, Fragment } from "react";
import { Combobox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowsUpDown,
    faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Students({ students }) {
    const [student, setStudent] = useState();
    const [query, setQuery] = useState("");

    const filteredStudents =
        query === ""
            ? students
            : students.filter((student) =>
                  student.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );
    return (
        <div className="flex flex-col items-center gap-7 z-40">
            <div className="w-80 z-50">
                <Combobox value={student} onChange={setStudent}>
                    <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                            <Combobox.Input
                                className="w-full border-none py-2 pl-3 pr-10 text-md leading-5 text-gray-900 focus:ring-0"
                                displayValue={(student) => student.name}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder="Search for a student"
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <FontAwesomeIcon
                                    icon={faArrowsUpDown}
                                    size="lg"
                                    style={{ color: "#FF00F7" }}
                                />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery("")}
                        >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredStudents.length === 0 &&
                                query !== "" ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Nothing found.
                                    </div>
                                ) : (
                                    filteredStudents.map((person) => (
                                        <Combobox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active
                                                        ? "bg-db-pink/10 text-black"
                                                        : "text-gray-900"
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ student }) => (
                                                <>
                                                    <div className="flex gap-2">
                                                        <span
                                                            className={`block truncate ${
                                                                student
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        <span>
                                                            {student ? (
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faSquareCheck
                                                                    }
                                                                    size="lg"
                                                                    style={{
                                                                        color: "#FF00F7",
                                                                    }}
                                                                />
                                                            ) : null}
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
            {student && (
                <div className="lg:sm:min-w-[700px] sm:min-w-[500px] min-w-[300px] bg-white flex flex-wrap justify-center rounded-md drop-shadow-2xl">
                    {student.name}
                    {student.email}
                </div>
            )}
        </div>
    );
}
